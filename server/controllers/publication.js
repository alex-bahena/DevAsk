const Publication = require("../models/publication");
const awsUploadImage = require("../utils/aws.upload");
const { v4: uuidv4 } = require("uuid");

async function publish(file, ctx) {
    const { id } = ctx;
    const { createReadStream, mimetype } = await file;
    const extension = mimetype.split("/")[1];
    const fileName = `publication/${uuidv4()}.${extension}`;
    const fileData = createReadStream();

    try {
        const result = await awsUploadImage(fileData, fileName);
        const publication = new Publication({
            idUser: id,
            file: result,
            typeFile: mimetype.split("/")[0],
            createAt: Date.now(),
        });
        publication.save();

        return {
            status: true,
            urlFile: result,
        };
    } catch (error) {
        return {
            status: null,
            urlFile: "",
        };
    }
    return null;
}

module.exports = {
    publish
};
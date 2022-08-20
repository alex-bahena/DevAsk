require("dotenv").config({ path: ".env" });
const AWS = require("aws-sdk");

process.env.MONGODB_URI;

const ID = process.env.AWS_ID_URI || process.env.AWS_ID;
const SECRET = process.env.AWS_SECRET_URI || process.env.AWS_SECRET;
const BUCKET_NAME =
  process.env.AWS_BUCKET_NAME_URI || process.env.AWS_BUCKET_NAME;

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});

async function awsUpload(file, filePath) {
  const params = { Bucket: BUCKET_NAME, Key: `${filePath}`, Body: file };
  try {
    const reponse = await s3.upload(params).promise();
    //reponse.Location returns the URL from the uploaded file.
    return reponse.Location;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

module.exports = awsUpload;

//Test

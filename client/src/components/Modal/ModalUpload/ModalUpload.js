import React, { useCallback, useState } from "react";
import { Modal, Icon, Button, Dimmer, Loader } from "semantic-ui-react";
import { useDropzone } from "react-dropzone"
import "./ModalUpload.scss"

export default function ModalUpload(props) {
    const { show, setShow } = props;

    const [fileUpload, setFileUpload] = useState(null)
    console.log(fileUpload)

    const onDrop = useCallback((acceptedFile) => {
        const file = acceptedFile[0]
        setFileUpload({
            type: "image",
            file,
            preview: URL.createObjectURL(file),
        });
    })

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        multiple: false,
        onDrop
    })

    const onClose = () => {
        setShow(false);
    };

    const onPublish = () => {
        console.log("publicando")
    }

    return (
        <Modal size="small" open={show} onClose={onClose} className="modal-upload">
            <div {...getRootProps()} className="dropzone" style={fileUpload && { border: 0 }}>

                {!fileUpload && (
                    <>
                        <Icon name="cloud upload" />
                        <p>arrastra la foto que quieras publicar</p>
                    </>
                )}

                <input {...getInputProps()} />
            </div>

            {fileUpload?.type === "image" && (
                <div className="image" style={{ backgroundImage: `url(${fileUpload.preview})` }} />
            )}

            {fileUpload && (
                <Button className="btn-upload btn-action" onClick={onPublish}>
                    publicar
                </Button>
            )}
        </Modal>
    );
}
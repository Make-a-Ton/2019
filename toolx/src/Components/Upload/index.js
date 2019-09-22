import React from "react";
import { Upload, message, Button, Icon } from 'antd';
import "./index.css";
import { Link } from "react-router-dom" ;

class UploadPhoto extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){

        const props = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
              authorization: 'authorization-text',
            },
            onChange(info) {
              if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
              } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            },
          };
          

        return(
            <div style={{ display : "flex" , flexDirection : "column" , alignItems : "center" , justifyContent : "center"}}>
                <h1>Upload Certificate</h1>
                <Upload {...props}>
                     <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
                <Link to="Home">
                    <Button style={{ marginTop : "10px"}}>Submit</Button>
                </Link>
            </div>
        )
    }
}

export default UploadPhoto ;
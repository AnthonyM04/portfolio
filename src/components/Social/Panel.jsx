import { Col, Image } from "../../util/Bootstrap.jsx";

export default function Panel ({element: {title, name, url}}) {

  return (
    <Col xs={2} className="d-flex justify-content-center" ><a 
      href={url} 
      target="_blank" 
      rel="noreferrer"><Image
        src={`${process.env.PUBLIC_URL}/social/logo/${name}.svg`}
        className="hover-social"/></a></Col>
  );    
}
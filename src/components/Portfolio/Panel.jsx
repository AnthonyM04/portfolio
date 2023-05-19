import { Col, Card } from "react-bootstrap";

export default function Panel ({ data:{id, name, about, website, cover} }) {

  // const handleSiteLaunch = websiteUrl => {
  //   console.log(websiteUrl);
  //   window.open(websiteUrl, "_blank");
  // }
  
  return (
    <Col key={id} md={10} lg={6} xl={4}>
      <Card className="portfolio-card glow-on-hover ">
          <a href={website} 
             target="_blank"
             rel="noreferrer"><Card.Img
            src={`${process.env.PUBLIC_URL}/ports/${cover}`} /></a>
        <div className="content">
          <h3>{name}</h3>
          <p>{about}</p>
        </div>
      </Card>
    </Col>
  )
}
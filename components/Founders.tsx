import { Row } from "@react-email/components";
import Authors from "./Authors";

export default function Founders() {
  return (
    <Row>
      <Authors
        authors={[
          {
            name: "Aryan Randeriya",
            title: "Founder & CEO",
            imgSrc: "https://github.com/aryanranderiya.png",
            showDivider: true,
            socialLinks: {
              twitter: "https://twitter.com/aryanranderiya",
              linkedin: "https://linkedin.com/in/aryanranderiya",
            },
          },
          {
            name: "Dhruv Maradiya",
            title: "Founder & CTO",
            imgSrc: "https://github.com/dhruv-maradiya.png",
            socialLinks: {
              twitter: "https://twitter.com/dhruvmaradiya",
              linkedin: "https://linkedin.com/in/dhruvmaradiya",
            },
          },
        ]}
      />
    </Row>
  );
}

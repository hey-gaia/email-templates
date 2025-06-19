import {
  Column,
  Container,
  Img,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";
import Authors from "./Authors";
import Founders from "./Founders";

export default function Footer() {
  return (
    <>
      <Section className="pt-6 text-center">
        <Row>
          <Column align="center">
            <Img
              alt="GAIA logo"
              height="35"
              src="https://api.heygaia.io/static/logo.png"
            />
            <Text className="mt-3 font-medium text-[16px] text-gray-900 mb-0">
              GAIA Labs Inc.
            </Text>
          </Column>
        </Row>
        <Row>
          <Link
            href="https://heygaia.io"
            className="text-xs text-[#00bbff] my-1"
          >
            heygaia.io
          </Link>

          <Text className="text-xs text-gray-400 my-1">support@heygaia.io</Text>
          <Text className="text-xs text-gray-400 my-2">
            © 2025 GAIA, All Rights Reserved
          </Text>
        </Row>
      </Section>
    </>
  );
}

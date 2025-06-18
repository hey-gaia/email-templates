import { Column, Img, Link, Row, Section, Text } from "@react-email/components";

export default function Footer() {
  return (
    <Section className="pt-6 text-center">
      <Row>
        <Column align="center">
          <Img
            alt="GAIA logo"
            height="35"
            src="https://api.heygaia.io/static/logo.png"
          />
          <Text className="mt-3 font-semibold text-[16px] text-gray-900 leading-[24px]">
            GAIA Labs Inc.
          </Text>

          {/* Social Icons */}
          {/* <Row className="mt-4 justify-center">
            <Column className="px-2">
              <Link href="https://x.com/">
                <Img
                  alt="X"
                  height="36"
                  src="https://react.email/static/x-logo.png"
                  width="36"
                />
              </Link>
            </Column>
            <Column className="px-2">
              <Link href="https://instagram.com/">
                <Img
                  alt="Instagram"
                  height="36"
                  src="https://react.email/static/instagram-logo.png"
                  width="36"
                />
              </Link>
            </Column>
          </Row> */}
        </Column>
      </Row>
    </Section>
  );
}

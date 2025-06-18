import { Section, Row, Column, Img, Link } from "@react-email/components";

export default function Header() {
  return (
    <Section className="pb-2">
      <Row>
        <Column className="w-full">
          <Img
            alt="React Email logo"
            height="35"
            src="https://api.heygaia.io/static/logo.png"
          />
        </Column>
        <Column align="right">
          <Row align="right">
            <Column className="px-[8px]">
              <Link
                className="text-gray-400 hover:underline!"
                href="https://heygaia.io"
                target="_blank"
              >
                heygaia.io{" "}
              </Link>
            </Column>
          </Row>
        </Column>
      </Row>
    </Section>
  );
}

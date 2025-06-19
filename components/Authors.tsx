import {
  Column,
  Heading,
  Hr,
  Img,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface Author {
  name: string;
  title: string;
  imgSrc: string;
  showDivider?: boolean;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
  };
}

interface AuthorsProps {
  authors: Author[];
}

export default function Authors({ authors }: AuthorsProps) {
  return (
    <>
      {authors.map((author, index) => (
        <>
          <Column>
            <Section
              align="left"
              className="mt-[16px] max-w-[230px]"
              key={index}
            >
              <Section className="mt-[5px] inline-block max-h-[48px] max-w-[48px] text-left">
                <Img
                  alt={author.name}
                  className="block rounded-full object-cover object-center"
                  height={48}
                  src={author.imgSrc}
                  width={48}
                />
              </Section>
              <Section className="ml-[18px] inline-block max-w-[120px] text-left align-top">
                <Heading
                  as="h3"
                  className="m-0 font-medium text-[14px] text-gray-900 leading-[20px]"
                >
                  {author.name}
                </Heading>
                <Text className="m-0 font-medium text-[12px] text-gray-500 leading-[14px]">
                  {author.title}
                </Text>
                <Section className="mt-[4px]">
                  {author.socialLinks?.twitter && (
                    <Link
                      className="inline-flex h-[12px] w-[12px]"
                      href={author.socialLinks.twitter}
                    >
                      <Img
                        alt="X"
                        height={12}
                        src="https://react.email/static/x-icon.png"
                        width={12}
                      />
                    </Link>
                  )}

                  {author.socialLinks?.linkedin && (
                    <Link
                      className="ml-[8px] inline-flex h-[12px] w-[12px]"
                      href={author.socialLinks.linkedin}
                    >
                      <Img
                        alt="LinkedIn"
                        height={12}
                        src="https://react.email/static/in-icon.png"
                        width={12}
                      />
                    </Link>
                  )}
                </Section>
              </Section>
            </Section>
          </Column>
          <Column>
            {author.showDivider ? (
              <Hr
                className="mr-[16px] inline-block h-[58px] w-[1px] bg-gray-300 [border:none]"
                style={{ float: "left" }}
              />
            ) : null}
          </Column>
        </>
      ))}
    </>
  );
}

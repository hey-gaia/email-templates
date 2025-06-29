import { Container, Link, Section, Text } from "@react-email/components";
import MainLayout from "../layouts/MainLayout";

interface WelcomeEmailProps {
  userName: string;
  discordUrl: string;
  whatsappUrl: string;
  twitterUrl: string;
  supportEmail: string;
}

const WelcomeEmail = ({
  userName,
  discordUrl,
  whatsappUrl,
  twitterUrl,
  supportEmail,
}: WelcomeEmailProps) => {
  return (
    <MainLayout showFooter={false} showHeader={false}>
      <Container>
        <Section className="mb-8">
          <Text className="font-light text-medium">
            Hey {userName}, <br /> Aryan here – one of the founders of GAIA
            <br />
            <br />
            Noticed you haven’t used GAIA in a bit — no worries at all, just
            wanted to check in.
            <br />
            <br />
            If it didn’t do what you were expecting, or something felt off, we'd
            really appreciate hearing about it. We’re building this to be
            genuinely helpful, and your feedback means a lot.
            <br />
            <br />
            You can just reply here or hit me up at
            <Link href={`mailto:${supportEmail}`} className="px-1">
              {supportEmail}
            </Link>
            . I make sure to check all my emails.
            <br />
            <br />
            Best,
            <br /> Aryan
          </Text>
        </Section>
      </Container>
    </MainLayout>
  );
};

WelcomeEmail.PreviewProps = {
  userName: "Dhruv",
  discordUrl: "https://discord.heygaia.io",
  whatsappUrl: "https://whatsapp.heygaia.io",
  twitterUrl: "https://twitter.com/_heygaia",
  supportEmail: "aryan@heygaia.io",
};

export default WelcomeEmail;

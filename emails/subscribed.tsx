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
            Just wanted to say thanks for upgrading to Pro. It really means a
            lot.
            <br />
            <br />
            We’ve been pouring everything into building this over the last few
            months, and seeing people support it like this keeps us going. Pro
            helps unlock more of what GAIA can do, and you can see all the
            features here.
            <br />
            <br />
            If anything doesn’t feel right or you’re hoping it could do more,
            I’d genuinely love to hear it. Just reply to this email — I read
            every one.
            <br />
            <br />
            Really appreciate you being here.
            <br />
            <br />
            Also, if you want to stay in the loop, feel free to join our{" "}
            <Link href={discordUrl}>Discord</Link>,{" "}
            <Link href={whatsappUrl}>WhatsApp</Link>, or follow our{" "}
            <Link href={twitterUrl}>Twitter</Link>
            .
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

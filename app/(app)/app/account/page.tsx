import ContentBlock from "@/app/components/ContentBlock";
import H1 from "@/app/components/H1";

export default function Account() {
  return (
    <main>
      <H1 className="my-8 text-white">Your account</H1>
      <ContentBlock className="h-[500px] flex justify-center items-center">
        <p>Logged in as</p>
      </ContentBlock>
    </main>
  );
}

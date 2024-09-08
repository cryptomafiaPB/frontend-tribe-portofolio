import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map copy.png";
import smileMemoji from "@/assets/images/memoji-smile.png";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "painting",
    emoji: "🎨",
  },
  {
    title: "Hiking",
    emoji: "🥾",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "painting",
    emoji: "🎨",
  },
  {
    title: "Swimming",
    emoji: "🏊",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♀️",
  },
  {
    title: "Reading",
    emoji: "📚",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          title="About Me"
          eyebrow="A Glimpse Into My World"
          description="Learn more about who i am, what i do, what inspires me."
        />
        <div className="mt-20">
          <Card className="h-[320px]">
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9 text-emerald-300" />
                <h3 className="font-serif text-3xl">My Reads</h3>
              </div>
              <p className="text-sm text-white/60 mt-2">
                Explore the books shaping my perspectives.
              </p>
            </div>
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book Cover" />
            </div>
          </Card>
          <Card>
            <div>
              <StarIcon />
              <h3>My Toolbox</h3>
              <p>
                Explore the technologies and tools I use to craft exceptional
                digital experiences.
              </p>
            </div>
            <div>
              {toolboxItems.map((item) => (
                <div key={item.title}>
                  <TechIcon component={item.iconType} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div>
              <StarIcon />
              <h3>Beyond the Code</h3>
              <p>Explore my interests and hobbies beyond the digital realm.</p>
            </div>
            {hobbies.map((hobbie) => (
              <div key={hobbie.title}>
                <span>{hobbie.title}</span>
                <span>{hobbie.emoji}</span>
              </div>
            ))}
          </Card>
          <Card>
            <Image src={mapImage} alt="Map Image" />
            <Image src={smileMemoji} alt="Smile memoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};

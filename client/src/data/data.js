import dash1 from "../assets/dash1.png";
import dash2 from "../assets/dash2.png";
import guide from "../assets/guide.png";
import akinfe from "../assets/akinfe.png";
import apc from "../assets/apc.png";
import pdp from "../assets/pdp.png";
import sdp from "../assets/sdp.png";
import lp from "../assets/lp.png";
import seyi from "../assets/seyi.jpg";
import senate1 from "../assets/senate1.jpg";
import senate2 from "../assets/senate2.jpg";
import senate3 from "../assets/senate3.jpg";
import senate4 from "../assets/senate4.jpg";
import senate5 from "../assets/senate5.jpg";
import senate6 from "../assets/senate6.jpg";

export const transparency = [
  {
    id: 1,
    icon: "UserRoundCheck",
    title: "Register to vote",
    desc: "Easy and quick registration for upcoming elections through the secure portal",
  },
  {
    id: 2,
    icon: "ShieldCheck",
    title: "Verify Identity",
    desc: "Your data is secured and verified with strong ID checks.",
  },
  {
    id: 3,
    icon: "SquareCheck",
    title: "Cast Your Vote",
    desc: "Ensure your vote is counted and secure.",
  },
  {
    id: 4,
    icon: "ChartCandlestick",
    title: "Track Result",
    desc: "Follow your vote status and result process.",
  },
];

export const process = [
  {
    title: "Register and Verify",
    desc: "Complete registration through the secure portal.",
  },
  {
    title: "Receive your Ballot",
    desc: "Once verified, you'll receive a digital ballot.",
  },
  {
    title: "Vote & Confirm",
    desc: "Cast your vote securely and confirm submission.",
  },
];

export const links = [
  {
    path: "/app/home",
    label: "Home",
  },
  {
    path: "/app/dashboard",
    label: "Dashboard",
  },
  {
    path: "/app/education-hub",
    label: "Education Hub",
  },
  {
    path: "/app/about",
    label: "About",
  },
  {
    path: "/app/results",
    label: "Results",
  },
];

export const authLink = [
  {
    path: "/verify",
    label: "Verify",
  },
  {
    path: "/register",
    label: "Register",
  },
];

export const elections = [
  {
    id: 1,
    title: "Gubernatorial Election, Lagos State, 2025",
    desc: "Vote for the next Lagos state Governor",
    time: "Closes in 5 hours",
    img: dash1,
    route: "governorship",
  },
  {
    id: 2,
    title: "Senate House Election, Ogun State, 2025",
    desc: "Vote for the Senate Representative",
    time: "Closes in 3 days",
    img: dash2,
    route: "senate",
  },
];

export const history = [
  {
    id: 1,
    title: "2024 Gubernatorial Election",
    date: "6th November, 2024",
    status: "Certified",
  },
  {
    id: 2,
    title: "2023 House of Representative Election",
    date: "15th June, 2023",
    status: "Certified",
  },
];

export const electType = [
  {
    id: 1,
    route: "/app/dashboard/presidential",
    title: "Presidential",
    icon: "House",
  },
  {
    id: 2,
    route: "/app/dashboard/governorship",
    title: "Governorship",
    icon: "HousePlus",
  },
  {
    id: 3,
    route: "/app/dashboard/senate",
    title: "Senate",
    icon: "UsersRound",
  },
  {
    id: 4,
    route: "/app/dashboard/house-of-rep",
    title: "House of Reps",
    icon: "Building2",
  },
  {
    id: 5,
    route: "/app/dashboard/local-govt",
    title: "Local Govt.",
    icon: "Flag",
  },
];

export const tabs = [
  {
    key: "secure",
    label: "Secure Registration",
    content: [
      {
        title: "Create Your Secure Account",
        instruction: "Follow the simple steps to create your E-vote account.",
        required: "You will require:",
        details:
          "Email address and Voter's Card / NIN (National Identity Number)",
        image: guide,
      },
    ],
  },
  {
    key: "identity",
    label: "Identity Registration",
    content: [
      {
        title: "Complete Identity Verification",
        instruction:
          " Verify your identity securely before participating in the voting process.",
        required: "You will require:",
        details: "Valid facial verification and Biometric confirmation",
        image: guide,
      },
    ],
  },
  {
    key: "vote",
    label: "Vote Casting",
    content: [
      {
        title: "Cast Your Vote",
        instruction:
          " After verification, cast your vote securely from your device.",
        required: "Requirements:",
        details: "Stable internet connection and Registered voting credentials",
        image: guide,
      },
    ],
  },
];

export const faqs = [
  {
    question: "How is my vote kept secure?",
    answer:
      "Lorem IPSUM and some other things I can't remember. Some lorem ipsum dolor sit amet, consectetur adipiscing and more lorem ipsum to follow.",
  },
  {
    question: "Who is eligible to vote with the E-platform?",
    answer:
      "Any registered voter with a valid national identification and verified account on the platform.",
  },
  {
    question: "What to do in case of technical issues",
    answer:
      "You can reach out to our support team, restart the application, or check your internet connection.",
  },
];

export const principles = [
  {
    icon: "Search",
    title: "Our core Principles",
    desc: "Committed to upholding the highest standard to ensure every vote is secure, with a transparent process and voter empowerment.",
  },
  {
    icon: "ShieldCheck",
    title: "Transparency",
    desc: "Easy and quick registration for upcoming elections through the secure portal",
  },
  {
    icon: "Users",
    title: "Guaranteed Security",
    desc: "Committed to upholding the highest standard to ensure every vote is secure, with a transparent process and voter empowerment.",
  },
];

export const accountSettings = [
  {
    id: 1,
    route: "/app/profile/profile-setting",
    title: "Profile",
    icon: "CircleUser",
  },
  {
    id: 2,
    route: "/app/profile/notification",
    title: "Notifications",
    icon: "BellDot",
  },
];
export const contestants = [
  {
    id: 1,
    electionType: "Governorship",
    name: "Akinfewa John",
    party: "PDP",
    img: akinfe,
    partyLogo: pdp,
  },
  {
    id: 2,
    electionType: "Governorship",
    name: "Seyi Makinde",
    party: "APC",
    img: seyi,
    partyLogo: apc,
  },
  {
    id: 3,
    electionType: "Governorship",
    name: "Usman Bello",
    party: "APDI",
    img: akinfe,
    partyLogo: sdp,
  },
  {
    id: 4,
    electionType: "Governorship",
    name: "Kola Williams",
    party: "SDP",
    img: seyi,
    partyLogo: lp,
  },
  {
    id: 5,
    electionType: "Governorship",
    name: "Sarah Ogunleye",
    party: "APC",
    img: seyi,
    partyLogo: apc,
  },
  {
    id: 6,
    electionType: "Governorship",
    name: "Mohammed Idris",
    party: "PDP",
    img: akinfe,
    partyLogo: pdp,
  },
];

export const senate = [
  {
    id: 1,
    electionType: "Senate",
    name: "sulyman",
    party: "PDP",
    img: senate1,
    partyLogo: pdp,
  },
  {
    id: 2,
    electionType: "Senate",
    name: "damite",
    party: "APC",
    img: senate2,
    partyLogo: apc,
  },
  {
    id: 3,
    electionType: "Senate",
    name: "oluwaseyi",
    party: "APDI",
    img: senate3,
    partyLogo: sdp,
  },
  {
    id: 4,
    electionType: "Senate",
    name: "samuel",
    party: "SDP",
    img: senate4,
    partyLogo: lp,
  },
  {
    id: 5,
    electionType: "Senate",
    name: "bam",
    party: "APC",
    img: senate5,
    partyLogo: apc,
  },
  {
    id: 6,
    electionType: "Senate",
    name: "sulyman",
    party: "PDP",
    img: senate6,
    partyLogo: pdp,
  },
];

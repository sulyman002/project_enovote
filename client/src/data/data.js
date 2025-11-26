import dash1 from "../assets/dash1.png";
import dash2 from "../assets/dash2.png";

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
    label: "Home"
  }, 
  {
    path: "/app/dashboard",
    label: "Dashboard"
  },
  {
    path: "/app/education-hub",
    label: "Education Hub"
  },
  {
    path: "/app/about",
    label: "About"
  }
]

export const authLink = [
  {
    path: "/verify",
    label: "Verify"
  },
  {
    path: "/register",
    label: "Register"
  }
]

export const elections = [
    {
      id: 1,
      title: "Gubernatorial Election, Lagos State, 2025",
      desc: "Vote for the next Lagos state Governor",
      time: "Closes in 5 hours",
      img: dash1,
      route: "governorship"
    },
    {
      id: 2,
      title: "Senate House Election, Ogun State, 2025",
      desc: "Vote for the Senate Representative",
      time: "Closes in 3 days",
      img: dash2,
      route: "senate"
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
      route: "governorship",
      title: "Governorship",
      icon: "HousePlus",
    },
    {
      id: 3,
      route: "senate",
      title: "Senate",
      icon: "UsersRound",
    },
    {
      id: 4,
      route: "house-of-rep",
      title: "House of Reps",
      icon: "Building2",
    },
    {
      id: 5,
      route: "local-govt",
      title: "Local Govt.",
      icon: "Flag",
    },
  ]

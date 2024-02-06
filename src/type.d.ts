export type headerProps = {
  dark: boolean;
  setDark: (value: boolean) => void;
};

export type homeProps = {
  data: dataType[];
  dark: boolean;
  modal: boolean;
  setModal: (value: boolean) => void;
};

export type pageProps = {
  data: dataType[];
  dark: boolean;
};

type dataType = {
  logo: string;
  postedAt: string;
  contract: string;
  location: string;
  position: string;
  company: string;
  logoBackground: string;
  website: string;
  apply: string;
  description: string;
  requirements: reqType;
  role: reqType;
};

type reqType = {
  content: string;
  items: string[];
};

export type submitType = {
  name: string;
  place: string;
};

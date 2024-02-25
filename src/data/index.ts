type TheaderData = {
  title: string;
  desc: string;
};

type TmainData = {
  title: string;
  desc: string;
  comment: {
    title: string;
    comment1: string;
    sendedBy1: string;
    comment2: string;
    sendedBy2: string;
  };
  infoContact: {
    title: string;
    desc: string;
  };
};

export const headerData: TheaderData = {
  title: "Hello Mom!",
  desc: "english web mom provide many ways fun to learn grammar, pronounciation, speaking, writing, even vocabularies. we formed this web in order to reach people wider to learn english langguage at ease. Many expreienced teacher have been joining us and willing to help student from kids, teen up until old people who are still eager to learn english more..!",
};

export const mainData: TmainData = {
  title: "Effective learning with various methods",
  desc: "Experience a more effective and efficient English learning experience with video, audio, text and interactive excercises",
  comment: {
    title: "Our Subcribers!!",
    comment1:
      "This website is beautiful and simple, thanks for making this website for english learner like me, even though it's just website for someone's portofolio.",
    sendedBy1: "Anonymous",
    comment2:
      "Dengan sederhana website ini cantik tidak banyak animasi tapi tetap kelihatan bagus. Ngomong-ngomong, ini website hanya untuk showcase personal project not the real website to learn english.",
    sendedBy2: "Anonymous",
  },
  infoContact: {
    title: "Got a question?",
    desc: "If you have ideas on how we can improve our services, please share them with us.",
  },
};

export const quote =
  "the thing is, its hard to learn english, be patient if you are willing to feel many things";

export const footer1: String[] = ["Our Company", "Our Branches", "About Us"];
export const footer2: String[] = [
  "Introduction",
  "Lesson 1",
  "Lesson 2",
  "Lesson for Interview",
  "Lesson for Working",
  "More Lesson",
];
import type {NextPage} from "next";

import Questions from "../faq/view/Questions";

interface Props {}

const QuestionsRoute: NextPage<Props> = () => {
  return <Questions />;
};

export default QuestionsRoute;

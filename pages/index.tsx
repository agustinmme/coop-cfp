import type {GetStaticProps, NextPage} from "next";

import api from "../users/api";
import {IUser} from "../users/types";
import Users from "../users/views/Users";

interface Props {
  users: IUser[];
  date: Date;
}

const HomeRoute: NextPage<Props> = ({users, date}) => {
  return (
    <>
      <Users date={date} users={users} />
    </>
  );
};

export default HomeRoute;

export const getStaticProps: GetStaticProps = async () => {
  const users = await api.list();

  return {
    revalidate: 86400,
    props: {
      users,
      date: Date.now(),
    },
  };
};

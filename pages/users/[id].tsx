import {ParsedUrlQuery} from "querystring";

import * as React from "react";
import {GetStaticPaths, GetStaticProps} from "next";

import {IUser} from "../../users/types";
import api from "../../users/api";
import User from "../../users/views/User";

interface Props {
  user: IUser;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

const UserRoute: React.FC<Props> = ({user}) => {
  return <User user={user} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {id} = context.params as Params;

  try {
    const user = await api.fetchById(id);

    return {
      revalidate: 86400,
      props: {
        user,
      },
    };
  } catch (e) {
    return {notFound: true};
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const usuarios = await api.list();

  return {
    paths: usuarios.map((usuario) => ({params: {id: usuario.id}})),
    fallback: false,
  };
};

export default UserRoute;

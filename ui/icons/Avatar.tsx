import {Avatar as ChakaraAvatar, AvatarProps} from "@chakra-ui/react";
import React from "react";

const Avatar: React.FC<AvatarProps> = ({...props}) => {
  return <ChakaraAvatar bg={"primary"} color="tertiary" {...props} />;
};

export default Avatar;

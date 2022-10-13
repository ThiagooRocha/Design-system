import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import {
  TextInput,
  TextInputInputProps,
  TextInputRootProps,
  TextInputIconProps,
} from "./TextInput";

export default {
  title: "Componets/Input",
  component: TextInput.Root,
  args: {
    children: 
      [
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>,
        <TextInput.Input placeholder="Type your email address" />
      ],

  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputInputProps>;

export const Default: StoryObj<TextInputInputProps> = {};

export const WithoutIcon: StoryObj<TextInputInputProps> = {
    args: {
        children: 
          [
            <TextInput.Input placeholder="Type your email address" />
          ],
      },
};


import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { AUTHOR_TITLE_FIELD } from "./AuthorTitle";
import { POST_TITLE_FIELD } from "../post/PostTitle";

export const AuthorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Comment"
          target="authorId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Author"
              source="author.id"
              reference="Author"
            >
              <TextField source={AUTHOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Post" source="post.id" reference="Post">
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Post" target="authorId" label="Posts">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Author"
              source="author.id"
              reference="Author"
            >
              <TextField source={AUTHOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="Published" source="published" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

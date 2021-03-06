/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactNode } from 'react';
import {
  Header,
  Page,
  pageTheme,
  Content,
  ContentHeader,
  SupportButton,
} from '@backstage/core';
import { Grid } from '@material-ui/core';

type Props = {
  title?: string;
  children: ReactNode;
};

export const RollbarLayout = ({ title = 'Dashboard', children }: Props) => {
  return (
    <Page theme={pageTheme.tool}>
      <Header
        title="Rollbar"
        subtitle="Real-time error tracking & debugging tools for developers"
      />
      <Content>
        <ContentHeader title={title}>
          <SupportButton>
            Rollbar plugin allows you to preview issues and navigate to rollbar.
          </SupportButton>
        </ContentHeader>
        <Grid container spacing={3} direction="column">
          {children}
        </Grid>
      </Content>
    </Page>
  );
};

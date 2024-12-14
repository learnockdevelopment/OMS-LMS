// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { CoreSharedModule } from '@/core/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreReportBuilderComponentsModule } from './components/components.module';
import { CoreReportBuilderListPage } from './pages/list/list';
import { CoreReportBuilderReportPage } from './pages/report/report';

const routes: Routes = [
    {
        path: '',
        component: CoreReportBuilderListPage,
    },
    {
        path: ':id',
        component: CoreReportBuilderReportPage,
    },
];

@NgModule({
    imports: [
        CoreSharedModule,
        CoreReportBuilderComponentsModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        CoreReportBuilderListPage,
        CoreReportBuilderReportPage,
    ],
})
export default class CoreReportBuilderLazyModule {}
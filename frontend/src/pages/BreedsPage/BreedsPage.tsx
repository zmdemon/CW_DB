import React from 'react';
import { cn } from '@bem-react/classname';

import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { Page } from '../../components/Page';
import { BreedForm } from './BreedForm';
import { BreedsTable } from './BreedsTable';

import './BreedsPage.css';
import {VerticalFormTablePanel} from "../../components/VerticalFormTablePanel/VerticalFormTablePanel";


const cnBreedsPage = cn('BreedsPage');

export const BreedsPage: React.FC = () => (
    <Page className={cnBreedsPage()}>
        <MainLayout className={cnBreedsPage('Layout')}>
            <VerticalFormTablePanel
                form={(
                    <div className={cnBreedsPage('FormContainer')}>
                        <BreedForm />
                    </div>
                )}
                table={<BreedsTable />}
            />
        </MainLayout>
    </Page>
);
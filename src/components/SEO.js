import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({title}) => (
    <Helmet title = {title + ' | toDo - plan your future'}
            htmlAttributes={{ lang: 'en' }}
            meta={[
                {
                    name: `description`,
                    content: 'ToDo Application created by Ernest Bieś',
                }
            ]}
    />
);

export default SEO;

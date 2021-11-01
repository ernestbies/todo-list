import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({title}) => (
    <Helmet title = {title + ' | TODO App ernestbies.com'}
            htmlAttributes={{ lang: 'en' }}
            meta={[
                {
                    name: `description`,
                    content: 'ToDo Application created by ernestbies.com',
                }
            ]}
    />
);

export default SEO;

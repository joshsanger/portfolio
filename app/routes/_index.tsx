import type {V2_MetaFunction, LinksFunction} from '@remix-run/node';

import Heading from '~/components/Heading';
import styles from '~/styles/tailwind.css';

export const links: LinksFunction = () => [{rel: 'stylesheet', href: styles}];

export const meta: V2_MetaFunction = () => {
  return [
    {title: 'Josh Sanger | Front end developer'},
    {name: 'description', content: 'Front end developer'},
  ];
};

export default function Index() {
  return (
    <main className="grid place-items-center h-full">
      <Heading className="text-center">
        I create engaging and delightful web experiences
      </Heading>
    </main>
  );
}

import type {StoryObj} from '@storybook/svelte';

import Name from '../../module/components/Name.svelte';

const meta = {
    title: 'Character/Name',
    component: Name,
    tags: ['autodocs'],
    argTypes: {},
} //satisfies Meta<Name>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = {
    args: {
        actor: {name: 'John Doe'},
    },
};


import { fail } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

async function upsertCategory(name: string) {
	try {
		const updatedCategory = await prisma.category.upsert({
			where: { name },
			update: {
				votes: {
					increment: 1
				}
			},
			create: {
				name,
				votes: 1
			}
		});

		return updatedCategory;
	} catch (error) {
		console.error('Error updating or creating category:', error);
		throw new Error('Unable to process the category.');
	}
}

export const load: PageServerLoad = async () => {
	return {
		categories: await prisma.category.findMany({})
	};
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		let foodName = data.get('category');

		if (!foodName) {
			return fail(400, { foodName, missing: true });
		}

		foodName = foodName.toString().toLowerCase();
		await upsertCategory(foodName);
		throw redirect(303, '/results');
	}
} satisfies Actions;

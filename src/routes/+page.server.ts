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

function isOnOrAfterTargetDate(date: Date) {
	const targetDate = new Date("2024-11-20T00:00:00.000-05:00");
	const timeZone = "America/New_York";

	const formatter = new Intl.DateTimeFormat("en-US", {
		timeZone,
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});

	const formattedInput = formatter.format(date);
	const formattedTarget = formatter.format(targetDate);

	return formattedInput >= formattedTarget;
}

export const load: PageServerLoad = async () => {
	const inputDate = new Date();
	if (isOnOrAfterTargetDate(inputDate)) {
		throw redirect(307, '/results');
	}

	return {
		categories: await prisma.category.findMany({})
	};
};

export const actions = {
	default: async ({ request }) => {
		const inputDate = new Date();
		if (isOnOrAfterTargetDate(inputDate)) {
			throw redirect(307, '/results');
		}

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

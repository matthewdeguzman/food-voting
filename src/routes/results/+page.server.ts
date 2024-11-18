import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		categories: await prisma.category.findMany({
			orderBy: {
				votes: 'desc'
			}
		})
	};
};

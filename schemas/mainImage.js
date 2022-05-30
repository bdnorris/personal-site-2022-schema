export default {
	name: 'mainImage',
	title: 'Main image',
	type: 'object',
	fields: [
		{
			name: 'mainImageImage',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'alt',
			title: 'Alternative text',
			type: 'string',
		}
	]
};
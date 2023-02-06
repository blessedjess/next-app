import React from "react";
import Link from "next/link";
import { render } from "datocms-structured-text-to-html-string";
import PostCard from "../components/postCard";

interface Article {
	id: string;
	title: string;
	_status: string;
	content: any;
	slug: string;
	_createdAt: string;
}
const getAllArticles = async () => {
	try {
		const headers = {
			"content-type": "application/json",
			Authorization: `Bearer ${process.env.DATOCMS_READONLY_TOKEN}`,
		};
		const requestBody = {
			query: `
			query getAllArticles {
				allArticles {
				  id
				  title
				  _status
				  content {
					blocks
					links
					value
				  }
				  slug
				  _createdAt
				  author
				  images {
					url
				  }
				}
				_allArticlesMeta {
				  count
				}
			  }
			  
			`,
		};
		const options = {
			method: "POST",
			headers,
			body: JSON.stringify(requestBody),
		};
		const response = await (
			await fetch(`${process.env.DATOCMS_API_URL}`, options)
		).json();
		console.log("RESPONSE FROM FETCH REQUEST", response?.data);
		return response.data;
	} catch (err) {
		console.log("ERROR DURING FETCH REQUEST", err);
	}
};

export default async function ArticleList() {
	const postCollection = await getAllArticles();

	return (
		<div className="bg-gray-200 p-4 ">
			<h1 className="text-3xl font-bold text-center">Newsletter</h1>
			<div className="my-8" />
			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{postCollection.allArticles?.map((edge: any) => {
					return (
						<div
							key={edge.id}
							className="my-4 rounded-xl p-3 hover:scale-105 duration-300 "
						>
							<Post article={edge} />
						</div>
					);
				})}
			</div>
		</div>
		// <ul>
		// 	{postCollection.allArticles?.map((edge: Article) =>
		// 		edge ? (
		// 			<li key={edge.id}>
		// 				<Link href={`/posts/${edge.slug}`}>
		// 					<div>{edge.title}</div>
		// 					<div>{new Date(edge._createdAt).toDateString()}</div>
		// 				</Link>
		// 				<article className="prose lg:prose-xl">
		// 					<div
		// 						dangerouslySetInnerHTML={{
		// 							__html: render(edge.content.value) || "",
		// 						}}
		// 					/>
		// 				</article>
		// 			</li>
		// 		) : null
		// 	)}
		// </ul>
	);
}

export function Post({ article }: any) {
	const slug = article.slug;
	const title = article.title;
	const content = article.content.value;
	const created = article._createdAt;
	const splash_image = article.images.url;
	const author = article.author;

	return (
		<Link href={`/posts/${slug}`}>
			<PostCard
				id={slug}
				title={title}
				content={content}
				created={created}
				author={author}
				image={splash_image}
			/>
		</Link>
	);
}

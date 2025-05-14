type Post = {
  _id: number;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  author: {
    id: number;
    name: string;
  };
  tags?: string[];
};

type StartupCardProps = {
  post: Post;
};
import { StructuredText, Image, ResponsiveImageType } from "react-datocms";

type PostBodyType = {
  content: any;
};
const PostBody: React.FC<PostBodyType> = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="prose prose-lg prose-blue">
        <StructuredText
          data={content}
          renderBlock={({ record }) => {
            return <pre>{JSON.stringify(record, null, 2)}</pre>;
          }}
        />
      </div>
    </div>
  );
};

export default PostBody;

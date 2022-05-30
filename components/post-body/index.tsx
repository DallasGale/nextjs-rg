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
            // if (record.__typename === "ImageBlockRecord") {
            //   return <Image data={record?.image?.responsiveImage} alt="" />;
            // }

            return (
              <>
                <p>Dont know how to render a block!</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            );
          }}
        />
      </div>
    </div>
  );
};

export default PostBody;

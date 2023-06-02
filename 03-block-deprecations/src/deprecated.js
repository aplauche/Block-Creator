
import { useBlockProps, RichText } from '@wordpress/block-editor';


const v2 = {
	attributes: {
		content: {
			type: "string",
			source: "text",
			selector: "p"
		}
	},
  migrate({content}){
    return {
      body: content
    }
  },
	save({attributes}) {
    const blockProps = useBlockProps.save({
      className: "basic-block"
    })
    return (
      <div { ...blockProps }>
          <RichText.Content 
            tagName="p"
            value={attributes.content}
          />
      </div>
    );
  }
}

const v1 = {
	attributes: {
		content: {
			type: "string",
			source: "text",
			selector: "h2"
		}
	},
	save: ({attributes}) => {
		const blockProps = useBlockProps.save({
			className: "basic-block"
		})
		return (
			<div { ...blockProps }>
				<RichText.Content 
					tagName="h2"
					value={attributes.content}
				/>
			</div>
		);
	}
}

export default [v2, v1]
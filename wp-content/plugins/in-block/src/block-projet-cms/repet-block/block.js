import { PLUGIN_NAME } from '../../constants'

const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { PlainText } = wp.blockEditor
const { Button } = wp.components
const { MediaPlaceholder } = wp.blockEditor

const BLOCK_NAME = `${PLUGIN_NAME}/repetition-block`

registerBlockType(BLOCK_NAME, {
  title: __('Repetition block'),
  description: __('Example repeater block!'),
  icon: 'nametag',
  category: 'common',
  attributes: {
    content: {
      type: 'array'
    }
  },

  edit: props => {
    const { attributes: { content = [] }, setAttributes } = props
    return (
      <>
        {content.map((value, index) => {
          return (
            <>
            <MediaPlaceholder
                onSelect={(media) =>  {
                  const newContent = [...content]
                  newContent[index].imageUrl = media.url
                  newContent[index].imageId = media.id
                  setAttributes({content: newContent })
                }}
                allowedTypes={['image']}
                multiple={false}
                labels={{ title: 'The Image' }}
              />
              <PlainText
                keepplaceholderonfocus
                placeholder={__('title')}
                value={value.title}
                onChange={(title) => {
                  const newContent = [...content]
                  newContent[index].title = title
                  setAttributes({ content: newContent })
                }}
              />
              <PlainText
                keepplaceholderonfocus
                placeholder={__('subtitle')}
                value={value.subtitle}
                onChange={(subtitle) => {
                  const newContent = [...content]
                  newContent[index].subtitle = subtitle
                  setAttributes({ content: newContent })
                }}
              />
              <Button
                onClick={() => {
                  const newContent = [
                    ...content.slice(0, index),
                    ...content.slice(index + 1)
                  ]
                  setAttributes({ content: newContent })
                }}
              >{__('Supprimer')}
              </Button>
            </>
          )
        })}
        <Button
          onClick={() => {
            const newContent = [...content, {}]
            setAttributes({ content: newContent })
          }}
        >{__('Ajouter')}
        </Button>
      </>
    )
  },

  save: ({ attributes: { content = [] } }) => (
    content.map((element) => {
      <div>
        <div>
          <div>
            <img src={element.imageUrl} />
            <h2>{element.title}</h2>
            <p>{element.subtitle}</p>
          </div>
        </div>
      </div>
    })
  )
})
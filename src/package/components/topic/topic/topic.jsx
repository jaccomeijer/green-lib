import { BlockTopic } from '../block-topic/block-topic'
import { CardTopic } from '../card-topic/card-topic'
import { FeaturedTopic } from '../featured-topic/featured-topic'
import { HeadlineTopic } from '../headline-topic/headline-topic'
import { HeroTopic } from '../hero-topic/hero-topic'
import { ProfileTopic } from '../profile-topic/profile-topic'
import { QuoteTopic } from '../quote-topic/quote-topic'
import { ShowcaseTopic } from '../showcase-topic/showcase-topic'

export const Topic = props => {
  let TopicElement

  switch (props.variant) {
  case 'block':
    TopicElement = BlockTopic
    break
  case 'card':
    TopicElement = CardTopic
    break
  case 'featured':
    TopicElement = FeaturedTopic
    break
  case 'headline':
    TopicElement = HeadlineTopic
    break
  case 'hero':
    TopicElement = HeroTopic
    break
  case 'profile':
    TopicElement = ProfileTopic
    break
  case 'quote':
    TopicElement = QuoteTopic
    break
  case 'showcase':
    TopicElement = ShowcaseTopic
    break
  default:
    TopicElement = BlockTopic
    break
  }

  return <TopicElement {...props} />
}

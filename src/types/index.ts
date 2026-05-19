export type Deck = {
  id: string
  name: string
  description: string | null
  created_at: string
}

export type Card = {
  id: string
  deck_id: string
  front: string
  back: string
  mastery: number
  created_at: string
}

export type Session = {
  id: string
  deck_id: string
  mode: 'flashcard' | 'multiple_choice' | 'typing'
  completed_card_ids: string[]
  is_complete: boolean
  created_at: string
  played_at: string
}
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Urahara Shop',

  projectId: '1uu01upi',
  dataset: 'urahara_bd',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

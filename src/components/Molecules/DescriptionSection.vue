<template>
  <div class="flex-content">
    <div class="w30"></div>
    <div class="w20 selectionbox">
      <div class="subtitle">
        <span>{{Container.Title}}</span>
      </div>
    </div>
    <div class="w40 selectionbox">
      <template v-if="IsMultipleSelection">
        <template v-for="item of Source">
          <LabeledCheckbox v-model="SelectedValue" :value="item" :key="item">
            {{spliceMarker(item)}}
          </LabeledCheckbox>
        </template>
      </template>
      <template v-else>
        <select v-model="SelectedValue[0]">
          <option v-for="item of Source" :key="item" :value="item">
            {{spliceMarker(item)}}
          </option>
        </select>
      </template>
    </div>
    <div class="w10"></div>
  </div>
</template>

<script>
import LabeledCheckbox from '@/components/Atoms/LabeledCheckbox'

export default {
  name: 'DescriptionSection',
  components: {
    LabeledCheckbox
  },
  model: {
    prop: 'Container',
    event: 'update'
  },
  props: {
    Container: {
      type: Object, // .Title, .Multi, .Options[], .Value[]
      required: true
    }
  },
  computed: {
    Source () {
      return this.Container.Options || []
    },
    IsMultipleSelection () {
      return this.Container.Multi
    },
    SelectedValue: {
      get () {
        return this.Container.Value ? this.Container.Value : []
      },
      set (value) {
        const description = Object.assign({}, this.Container)
        /*
          Title: this.Container.Title,
          Options: this.Container.Options,
          Multi: this.Container.Multi,
          Value: []
        }
        */
        if (value === undefined || typeof value === 'string') {
          if (value) {
            description.Value = [value]
          }
        } else {
          if (value.length > 0) {
            description.Value = [...value]
          }
        }
        this.$emit('update', description)
      }
    }
  },
  methods: {
    spliceMarker (str) {
      return str.replace(/\[.+\]/g, '').replace(/\$$/, '')
    }
  }
}
</script>

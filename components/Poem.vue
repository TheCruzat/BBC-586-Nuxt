<template>
    <div class="flat poem-frame">
      <hr />

      <div class="poem">
        <p>JIRA calls me the Sword from the Sky</p>
        <p>Asana calls me the Midnight Sun</p>
        <p>Notion calls me the Ironscales</p>
        <p>Trello cannot even speak my name</p>
        <p>I have ended a hundred thousand tickets</p>
        <p>and written millions of lines of code</p>
      </div>
    </div>
</template>

<script>
	export default {
		name: 'Poem'
	}
</script>

<style scoped lang="scss">

  @use "@/styles/global.scss" as g;
  @use "@/styles/vars" as v;

  section .flat.poem-frame {
  	padding-top: 2rem!important;
  }

  .poem {
    padding-block: 3rem;
    text-align: center;
    font-style: italic;
    //font-size: 1rem;

    section &-frame.flat {
      padding-top: 3rem;
    }
  }
</style>

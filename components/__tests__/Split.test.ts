import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import Split from '~/components/Split.vue';
import Picture from '~/components/Picture.vue';

describe('Split Component', () => {
  const mockImageObj = {
    mobile: { webp: 'mobile.webp' },
    full: { webp: 'full.webp', jpg: 'full.jpg' },
  };

  const defaultProps = {
    id: 'section-1',
    msg: '<h2>Featured Project</h2>',
    img: mockImageObj,
    priority: false,
  };

  let wrapper;

  beforeEach(() => {
    wrapper = mount(Split, {
      props: defaultProps,
      global: {
        components: {
          Picture,
        },
      },
    });
  });

  it('renders the section element', () => {
    expect(wrapper.find('section.title-split').exists()).toBe(true);
  });

  it('applies correct id to the title spacer', () => {
    expect(wrapper.find('#section-1').exists()).toBe(true);
  });

  it('renders the title-spacer div', () => {
    expect(wrapper.find('.title-spacer').exists()).toBe(true);
  });

  it('renders Picture component with correct props', () => {
    const picture = wrapper.findComponent(Picture);
    expect(picture.exists()).toBe(true);
    expect(picture.props('img')).toEqual(mockImageObj);
    expect(picture.props('priority')).toBe(false);
  });

  it('passes priority prop to Picture component', () => {
    wrapper = mount(Split, {
      props: {
        ...defaultProps,
        priority: true,
      },
      global: {
        components: {
          Picture,
        },
      },
    });

    const picture = wrapper.findComponent(Picture);
    expect(picture.props('priority')).toBe(true);
  });

  it('renders h2 heading when msg prop is provided', () => {
    expect(wrapper.find('h2').exists()).toBe(true);
  });

  it('renders heading with correct HTML content', () => {
    expect(wrapper.find('h2').html()).toContain('Featured Project');
  });

  it('does not render h2 when msg prop is empty', () => {
    wrapper = mount(Split, {
      props: {
        ...defaultProps,
        msg: '',
      },
      global: {
        components: {
          Picture,
        },
      },
    });

    expect(wrapper.find('h2').exists()).toBe(false);
  });

  it('does not render h2 when msg prop is not provided', () => {
    wrapper = mount(Split, {
      props: {
        id: 'test-id',
        img: mockImageObj,
      },
      global: {
        components: {
          Picture,
        },
      },
    });

    expect(wrapper.find('h2').exists()).toBe(false);
  });

  it('passes img prop correctly to Picture component', () => {
    const customImg = {
      mobile: { webp: 'custom-mobile.webp' },
      full: { webp: 'custom-full.webp' },
    };

    wrapper = mount(Split, {
      props: {
        ...defaultProps,
        img: customImg,
      },
      global: {
        components: {
          Picture,
        },
      },
    });

    expect(wrapper.findComponent(Picture).props('img')).toEqual(customImg);
  });

  it('handles undefined id gracefully', () => {
    wrapper = mount(Split, {
      props: {
        msg: 'Test',
        img: mockImageObj,
      },
      global: {
        components: {
          Picture,
        },
      },
    });

    expect(wrapper.find('.title-spacer').exists()).toBe(true);
  });

  it('renders Picture component even when msg is not provided', () => {
    wrapper = mount(Split, {
      props: {
        id: 'test',
        img: mockImageObj,
      },
      global: {
        components: {
          Picture,
        },
      },
    });

    expect(wrapper.findComponent(Picture).exists()).toBe(true);
  });

  it('applies correct section structure for layout', () => {
    const section = wrapper.find('section.title-split');
    expect(section.find('.title-spacer').exists()).toBe(true);
    expect(section.findComponent(Picture).exists()).toBe(true);
  });

  it('preserves HTML in msg prop for rich text', () => {
    const richTextMsg = '<h2>Title <span>with emphasis</span></h2>';

    wrapper = mount(Split, {
      props: {
        ...defaultProps,
        msg: richTextMsg,
      },
      global: {
        components: {
          Picture,
        },
      },
    });

    expect(wrapper.html()).toContain('with emphasis');
  });

  it('has correct CSS class for styling', () => {
    expect(wrapper.find('.title-split').exists()).toBe(true);
  });

  it('combines all props for a complete section render', () => {
    const completeProps = {
      id: 'complete-section',
      msg: '<h2>Complete Section</h2><p>Description</p>',
      img: mockImageObj,
      priority: true,
    };

    wrapper = mount(Split, {
      props: completeProps,
      global: {
        components: {
          Picture,
        },
      },
    });

    // Verify all parts are rendered
    expect(wrapper.find('#complete-section').exists()).toBe(true);
    expect(wrapper.find('section.title-split').exists()).toBe(true);
    expect(wrapper.findComponent(Picture).exists()).toBe(true);
    expect(wrapper.find('h2').exists()).toBe(true);
    expect(wrapper.findComponent(Picture).props('priority')).toBe(true);
  });

  it('renders without Picture component when img is empty', () => {
    wrapper = mount(Split, {
      props: {
        ...defaultProps,
        img: {},
      },
      global: {
        components: {
          Picture,
        },
      },
    });

    // Picture component should still exist, but it won't render anything
    expect(wrapper.findComponent(Picture).exists()).toBe(true);
  });

  it('maintains prop reactivity', async () => {
    wrapper = mount(Split, {
      props: defaultProps,
      global: {
        components: {
          Picture,
        },
      },
    });

    const newMsg = '<h2>Updated Title</h2>';
    await wrapper.setProps({ msg: newMsg });

    expect(wrapper.find('h2').html()).toContain('Updated Title');
  });

  it('handles special characters in msg prop', () => {
    const msgWithSpecialChars = '<h2>Title with &amp; Special &lt;Chars&gt;</h2>';

    wrapper = mount(Split, {
      props: {
        ...defaultProps,
        msg: msgWithSpecialChars,
      },
      global: {
        components: {
          Picture,
        },
      },
    });

    expect(wrapper.find('h2').exists()).toBe(true);
  });
});

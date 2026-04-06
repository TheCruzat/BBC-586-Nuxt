import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Picture from '~/components/Picture.vue';

describe('Picture Component', () => {
  const mockImageObj = {
    mobile: {
      webp: 'image-mobile.webp',
      jpg: 'image-mobile.jpg',
    },
    full: {
      webp: 'image-full.webp',
      jpg: 'image-full.jpg',
    },
  };

  it('renders picture element when img prop is provided', () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
      },
    });
    expect(wrapper.find('picture').exists()).toBe(true);
  });

  it('does not render when img prop is missing', () => {
    const wrapper = mount(Picture, {
      props: {
        img: null,
      },
    });
    expect(wrapper.find('picture').exists()).toBe(false);
  });

  it('renders webp source for full width screen', () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
      },
    });
    const sources = wrapper.findAll('source');
    expect(sources.length).toBeGreaterThan(0);
    const webpSource = sources.find((s) => s.attributes('type') === 'image/webp');
    expect(webpSource).toBeDefined();
  });

  it('renders mobile webp source', () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
      },
    });
    const sources = wrapper.findAll('source');
    const mobileWebpSource = sources.find(
      (s) => s.attributes('type') === 'image/webp' && !s.attributes('media'),
    );
    expect(mobileWebpSource).toBeDefined();
  });

  it('renders img element with correct src', () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
      },
    });
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe(mockImageObj.full.webp);
  });

  it('uses default alt text when not provided', () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
      },
    });
    const img = wrapper.find('img');
    expect(img.attributes('alt')).toBe('Hero image');
  });

  it('uses custom alt text when provided', () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
        alt: 'Custom hero',
      },
    });
    const img = wrapper.find('img');
    expect(img.attributes('alt')).toBe('Custom hero');
  });

  it('sets loading attribute to eager when priority is true', () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
        priority: true,
      },
    });
    const img = wrapper.find('img');
    expect(img.attributes('loading')).toBe('eager');
  });

  it('sets loading attribute to lazy when priority is false', () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
        priority: false,
      },
    });
    const img = wrapper.find('img');
    expect(img.attributes('loading')).toBe('lazy');
  });

  it('sets fetchpriority attribute based on priority prop', () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
        priority: true,
      },
    });
    const img = wrapper.find('img');
    expect(img.attributes('fetchpriority')).toBe('high');
  });

  it('applies custom styles to img element', () => {
    const customStyle = {
      objectPosition: 'center',
      opacity: '0.5',
    };
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
        imgStyle: customStyle,
      },
    });
    const img = wrapper.find('img');
    expect(img.attributes('style')).toContain('object-position');
  });

  it('handles image objects with only webp', () => {
    const webpOnlyImg = {
      mobile: {
        webp: 'mobile.webp',
      },
      full: {
        webp: 'full.webp',
      },
    };
    const wrapper = mount(Picture, {
      props: {
        img: webpOnlyImg,
      },
    });
    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe('full.webp');
  });
});


const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const clearContainerImages = () => {
  const rendersImages = container.querySelectorAll('.picture');
  rendersImages.forEach((element) => element.remove());
};

const createThumbnail = ({ comments, description, likes, url, id}) => {
  const thumbnail = template.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');

  image.src = url;
  image.alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.dataset.id = id;

  return thumbnail;
};

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });

  container.append(fragment);
};

export { renderThumbnails, clearContainerImages };

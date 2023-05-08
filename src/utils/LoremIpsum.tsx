import React from 'react';

interface Props {
  paragraphs?: number;
}

const loremIpsumParagraphs: string[] = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel turpis dolor. Donec consectetur eros eu enim iaculis, quis fermentum est malesuada. In laoreet sagittis diam ac tincidunt. Sed sodales nisl in risus tempus, ut commodo ipsum blandit. Integer nec sagittis odio. Suspendisse rhoncus mollis quam, a lacinia velit elementum non. Nam non velit id mi fermentum laoreet ac eget enim.',
  'Phasellus ut volutpat lacus, sit amet elementum felis. Curabitur euismod tincidunt eros, nec malesuada velit gravida et. Aenean posuere nulla non mauris consectetur, non auctor nisi posuere. Etiam ac risus lorem. Sed maximus tincidunt magna et ultricies. Vivamus vel erat at elit convallis finibus a et sapien. Fusce tristique, elit eget semper fermentum, nulla ex suscipit nunc, vel venenatis ex massa ut augue. In hac habitasse platea dictumst.',
  'Vestibulum ut tellus sapien. Suspendisse eleifend nulla orci, a dictum velit auctor et. Sed vel nisl vel sem feugiat dignissim. Vestibulum bibendum, sem a hendrerit laoreet, dolor justo luctus quam, ut consectetur sapien nibh a mauris. Fusce id varius nulla, ac rutrum lectus. Praesent ac metus vitae elit lacinia tempor nec non enim. Etiam porttitor sem sit amet felis tempor convallis. Suspendisse malesuada nunc quis elit scelerisque, non convallis nibh bibendum. Aliquam sagittis augue ac magna malesuada, sit amet rutrum nisl maximus. Donec semper suscipit augue, eu tincidunt est iaculis eu. Pellentesque lacinia tellus id aliquam bibendum. Integer et libero vel risus malesuada rhoncus a a velit.',
  'Cras euismod magna quis libero feugiat fringilla. Duis iaculis aliquam urna vitae feugiat. Aliquam dictum velit quis augue commodo varius. In imperdiet lacinia tincidunt. Nulla non convallis nibh. Praesent sit amet ex leo. Nulla egestas volutpat elit. Fusce fermentum lacus eu ipsum interdum commodo. Nullam consectetur velit euismod felis tincidunt eleifend. Sed congue ultrices lacus, vel bibendum nibh. Integer eget ante ante. Nam ornare urna vel augue tincidunt euismod. Curabitur in lectus eu augue feugiat tincidunt a a magna.',
];

const LoremIpsum = ({ paragraphs = 1 }: Props) => {
  const loremIpsumText = Array.from({ length: paragraphs }, () => {
    const randomIndex = Math.floor(Math.random() * loremIpsumParagraphs.length);
    return loremIpsumParagraphs[randomIndex];
  });

  return (
    <>
      {loremIpsumText.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </>
  );
};

export default LoremIpsum;

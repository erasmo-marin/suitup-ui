import React, { useMemo } from 'react';

interface Props {
  paragraphs?: number;
}

const loremIpsumParagraphs: string[] = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar diam quis dolor cursus volutpat. Ut vestibulum eros sit amet faucibus pulvinar. Donec lobortis pharetra neque, eget fermentum arcu consectetur quis. Aliquam sit amet urna bibendum, porta leo non, faucibus lorem. Donec porta sollicitudin dapibus. Ut ultricies eu enim id accumsan. Etiam quam nisi, molestie ut mauris in, lacinia pulvinar eros. Sed in orci faucibus, fermentum ligula eu, mattis libero. Fusce at maximus ante, quis iaculis sem. Ut ac mi ornare, tincidunt nisl in, maximus justo. Curabitur eu ex vel neque feugiat mattis. Cras eu nisi accumsan, semper tellus vel, euismod mi.',
  'Ut maximus ante ut viverra mattis. Nulla aliquet nec metus non vulputate. Quisque ut laoreet diam, ac facilisis ligula. Aliquam erat volutpat. Cras tempus, nisl nec dictum viverra, nibh mi eleifend tellus, a viverra nunc felis sed nibh. Aliquam ac luctus turpis. Nam rhoncus vel risus vel tincidunt. Cras ornare id felis vitae eleifend. In hac habitasse platea dictumst. Fusce quis eros ex. Sed rutrum dolor at libero efficitur pretium. Quisque imperdiet purus sapien, a fermentum massa posuere pulvinar. Pellentesque felis mauris, dictum sed suscipit euismod, facilisis vel metus. In blandit porttitor pulvinar. Donec consequat, ex sed sollicitudin volutpat, dui elit ultricies erat, ut sagittis metus sem in ipsum. Donec feugiat nec lorem nec bibendum.',
  'Sed a dui et nisl blandit euismod. Mauris mollis purus eget pretium finibus. Mauris sit amet nunc odio. Integer nisl diam, finibus quis metus placerat, varius porta ex. Donec non scelerisque lorem. Sed aliquam dictum imperdiet. Morbi rhoncus, purus a commodo varius, ante enim commodo urna, et molestie metus lorem in turpis. Vivamus eget erat eu erat mollis varius id vitae justo. Quisque tempor euismod lectus nec imperdiet. Ut lacinia nisl tincidunt, consequat nibh at, rhoncus nisi. Fusce gravida nunc vitae leo laoreet blandit. Nunc iaculis libero ut sodales mollis. Curabitur augue justo, congue eget aliquet sed, mollis bibendum erat. Duis auctor tristique malesuada. Aliquam ornare commodo tortor in aliquet.',
  'Donec ornare nulla ut metus rutrum bibendum non non ligula. Mauris vitae purus pellentesque, blandit nisl vitae, iaculis nunc. Phasellus tempor velit nec lacus consequat semper. Aenean maximus rhoncus eros vitae faucibus. Praesent dignissim egestas diam in volutpat. Donec ut vulputate nibh. Nulla ornare quam eget justo lacinia, in tristique orci mattis.',
  'In ultrices, ante et tincidunt rutrum, lectus sem mattis justo, in maximus lectus dui convallis lectus. In hendrerit maximus sapien a lacinia. Curabitur iaculis posuere ultrices. Mauris sed dictum elit. In ac ligula elit. Phasellus semper vulputate ornare. Cras id eros sed velit condimentum imperdiet. Ut at ornare mi.',
  'Proin at justo et neque fermentum interdum a dignissim nunc. Nulla laoreet ex ut ex bibendum, sed lobortis nibh luctus. Cras sed lacinia augue. Curabitur mi nulla, varius nec molestie ac, cursus eu justo. Curabitur quis pulvinar eros, at accumsan sem. Morbi congue et tellus eu volutpat. Mauris nec lacinia risus. Sed aliquam efficitur eros vitae molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut sodales arcu, id imperdiet augue. Phasellus purus arcu, maximus in ornare eget, mollis non orci. Cras aliquet lacus metus. Nulla ut eleifend eros. Nam sit amet purus est. Donec commodo consequat tincidunt. Etiam eget libero in purus commodo vulputate.',
  'Cras faucibus varius lacus non venenatis. Ut rutrum augue eu arcu elementum, sit amet volutpat nunc accumsan. Phasellus dictum leo nec lectus bibendum cursus. Aliquam nec dignissim enim, ultricies ullamcorper nisi. Cras volutpat mattis ante, ac pulvinar quam aliquam vel. Maecenas eu arcu non dui auctor aliquet a id turpis. Aliquam fermentum porta vulputate. Nam eu massa dictum, convallis lectus vitae, sodales dui. Vestibulum efficitur in lectus venenatis accumsan. Integer non arcu ut odio sagittis finibus. Phasellus viverra auctor tristique.',
  'Nullam cursus nec elit ac pulvinar. Vestibulum et dapibus quam, non malesuada lectus. Fusce posuere aliquet bibendum. Donec vitae augue nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam consequat lectus vitae risus pellentesque, in placerat nulla fringilla. Quisque vel pharetra lectus, in commodo massa. Phasellus ac erat neque. Proin in vulputate risus.',
  'Nullam in turpis purus. Donec a sollicitudin nisl. Donec facilisis dolor nibh. Etiam ac tortor et mi pharetra interdum et vitae ligula. Pellentesque justo nulla, dignissim et ullamcorper ut, rutrum vitae magna. Ut auctor molestie eros, id finibus nibh malesuada sed. Nullam finibus tincidunt metus non euismod. Ut sem libero, ornare at tempor facilisis, congue vel urna. Praesent porta pulvinar dictum.',
];

const LoremIpsum = ({ paragraphs = 1 }: Props) => {
  const loremIpsumText = useMemo(
    () =>
      Array.from({ length: paragraphs }, () => {
        const randomIndex = Math.floor(
          Math.random() * loremIpsumParagraphs.length,
        );
        return loremIpsumParagraphs[randomIndex];
      }),
    [paragraphs],
  );

  return (
    <>
      {loremIpsumText.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </>
  );
};

export default LoremIpsum;

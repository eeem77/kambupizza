import { Icon } from "astro-icon";
import { Image } from "astro:assets";
import ContentSection from "~/components/content-section.astro";
import { features, menu, party } from "./features.astro";

<Fragment>
  <ContentSection title="Our Story" id="about">
    <Fragment slot="lead">
      For two decades, Kambu Pizza delivers culinary excellence, emphasizing
      quality, innovation, and a welcoming community atmosphere. Perfectly
      crafted dough, curated flavors, and memorable experiences define our
      commitment to excellence. As a preferred venue for special occasions,
      Kambu Pizza offers decades of unrivaled experience and flavor.
    </Fragment>
    <ul class="grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {features.map(({ title, description, icon }) => (
        <Fragment>
          <li class="flex flex-col items-center gap-4 border border-default bg-offset p-6">
            <div class="h-16 w-16 rounded-full border-2 border-current p-3">
              <Icon name={icon} />
            </div>
            <p class="text-center font-extrabold text-xl">{title}</p>
            <p class="text-center text-offset text-sm">{description}</p>
          </li>
        </Fragment>
      ))}
    </ul>
  </ContentSection>

  <ContentSection title="Kambu Pizza Menu" id="menu">
    <Fragment slot="lead">
      Savor the exquisite blend of flavor, quality, and affordability that
      defines our pizzas, turning every bite into a taste of excellence.
    </Fragment>
    <ul class="grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {menu.map(({ title, description, icon, pricem, pricel }) => (
        <Fragment>
          <li class="flex flex-col items-center gap-4 border border-default bg-offset p-6">
            <div class="h-16 w-16 rounded-full border-2 border-current p-3">
              <Image src={icon} width="50" height="50" />
            </div>
            <p class="text-center font-extrabold text-xl">{title}</p>
            <p class="text-center text-offset text-sm">{description}</p>
            <div>
              <table class="text-center">
                <tr>
                  <td class="px-6 py-1">{`12" (M)`}</td>
                  <td class="px-6 py-1">{`14" (L)`}</td>
                </tr>
                <tr>
                  <td class="px-6 py-1">{pricem}</td>
                  <td class="px-6 py-1">{pricel}</td>
                </tr>
              </table>
            </div>
          </li>
        </Fragment>
      ))}
    </ul>
  </ContentSection>

  {/** <ContentSection title="Kambu Chicken Wing" id="chicken">
      <Fragment slot="lead">
        Experience a flavor journey with our Special Chicken Wings at Kambu Pizza. Meticulously crafted for succulence, bold notes, and aromatic spices, each wing is a culinary masterpiece. Join us for unparalleled taste and a new wing perfection standard.
      </Fragment>
      <ul class="grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        \\{
          chicken.map((\\{ title, description, icon, pricem, pricel \\}) => (
            <li class="flex flex-col items-center gap-4 border border-default bg-offset p-6">
              <div class="h-16 w-16 rounded-full border-2 border-current p-3">
                <Icon name=\\{icon\\} />
              </div>
              <p class="text-center font-extrabold text-xl">\\{title\\}</p>
              <p class="text-center text-offset text-sm">\\{description\\}</p>
              <div>
                <table>
                  <tr>
                    <td class="px-6 py-1">\\{pricem\\}</td>
                  </tr>
                </table>
              </div>
            </li>
          ))
        \\}
      </ul>
    </ContentSection> */}

  <ContentSection title="Kambu Pizza Private Party Room" id="party">
    <Fragment slot="lead">{`
    Welcome to the exquisite world of Kambu Pizza's Private Party Room, where we invite you to elevate your gatherings to an unparalleled level of sophistication and enjoyment. Immerse yourself in a luxurious ambiance tailored for intimate celebrations, as our culinary artisans curate a bespoke experience, pairing delectable pizzas with exceptional service. Whether it's a corporate event, milestone celebration, or an intimate soirée, our Private Party Room offers the perfect blend of opulence and culinary excellence to make your event truly unforgettable.
  `}</Fragment>
    <ul class="grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {party.map(
        ({ title, description, icon, people, time, hours, chargue, obs }) => (
          <Fragment>
            <li class="flex flex-col items-center gap-4 border border-default bg-offset p-6">
              <div class="h-16 w-16 rounded-full border-2 border-current p-3">
                <Icon name={icon} />
              </div>
              <p class="text-center font-extrabold text-xl">{title}</p>
              <p class="text-center text-offset text-sm">{description}</p>
              <div>
                <table class="text-xs">
                  <tr>
                    <td class="px-6 py-1">Max Number of People</td>
                    <td class="px-6 py-1">{people}</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-1">Open Time</td>
                    <td class="px-6 py-1">{time}</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-1">Party Hours</td>
                    <td class="px-6 py-1">{hours}</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-1">Party Room Rent Charge</td>
                    <td class="px-6 py-1">{chargue}</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="px-6 py-1 text-center text-gray-400">
                      {obs}
                    </td>
                  </tr>
                </table>
              </div>
            </li>
          </Fragment>
        ),
      )}
    </ul>
  </ContentSection>
</Fragment>;

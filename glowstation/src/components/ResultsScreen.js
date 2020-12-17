import React from "react";
import "../css/ResultScreen.css";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";
import Collapsible from "react-collapsible";

const ResultsScreen = (props) => {
  return (
    <>
      <h2 className="nameTitle">
        {props.name}
        <Typewriter
          stopBlinkinOnComplete="true"
          string="'s Routine Builder results."
        />
      </h2>
      <p className="intro">
        The order you layer your skincare products is important. The wrong order
        can lead to either pilling (where your products don't absorb and roll up
        into little gritty balls), or the products become ineffective becasue
        they're not being used as intended or absorbed by the skin correctly.
        Follow this custom routine built just for you to layer your products
        correctly and have the perfect routine for your needs. The Routine
        Builder gives you your ideal AM (morning) and PM (night-time) routine.
        As well as products that aren't <i>necessary</i> but complementary in
        the Optional box. These products can also aid in meeting your skincare
        goals so be use to check them out.
      </p>
      <div className="resultDivs">
        <div className="AMWrapper">
          <h1>AM routine</h1>
          <Collapsible trigger=" 1. Cleanser >">
            <p>
              This is the first step in your AM routine. It removes any
              grime/dirt gathered in your sleep. This is also the pefect time to
              remind you to change your pillow cases weekly!
            </p>
            <p>"Cleanser.imageLinks.img1"</p>
            <p>"Cleanser.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" 2. Toner / Essence >">
            <p>
             Toner's and Essence's are great for adding hydratingback into skin after cleansing, as well as removing any bits of dirt or residue your cleanser didn't catch. You can apply this with your hands and pat it into skin, or use a cotton pad and swipe.
            </p>
            <p>"Toner.imageLinks.img1"</p>
            <p>"Toner.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" 3. Serum >">
            <p>
              Serums address targeted concerns. They are best applied on damp skin after your toner, or you can spritz your face with a mist (found in the optional section) then apply the serum. Pat, don't rub!
            </p>
            <p>"Serum.imageLinks.img1"</p>
            <p>"Serum.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" 4. Moisturiser >">
            <p>
             All skin types need a moisturiser. Don't skin this step, it helps lock in all the goodness applied above and keeps your skin hydrated throughout the day. Apply to damp skin.
            </p>
            <p>"Moisturiser.imageLinks.img1"</p>
            <p>"Moisturiser.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" 5. SPF >">
            <p>
            It's a myth that black and brown people don't need SPF. Everyone needs SPF. Argue with yourself, but wear SPF. All of the SPF's recommended on Glow Station do not leave a white cast, we wouldn't do that you. We're trying to glow, not look like Casper the friendly ghost.
            </p>
            <p>"SPF.imageLinks.img1"</p>
            <p>"SPF.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
        </div>
        <div className="PMWrapper">
          <h1>PM routine</h1>
          <Collapsible trigger=" 1. Cleanser >">
            <p>
              Technically, at night you should double cleanser with an oil or balm cleanser first to breakdown any makeup or SPF, or just general grime, because oil disolves oil - but we'll keep it simple. Washing your face at night is so important to healthy skin and not getting a build up of dirt. Be sure to wash your face or at least 60 seconds, no less!
            </p>
            <p>"Cleanser.imageLinks.img1"</p>
            <p>"Cleanser.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" 2. Toner / Essence >">
            <p>
              Same as the AM routine, adds hydration and removes residue.
            </p>
            <p>"Toner.imageLinks.img1"</p>
            <p>"Toner.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" 3. Exfoliator >">
            <p>
              The best step. Exfoliating is vital to getting rid of all the nasties beneath the surface of your skin, it speeds up cell turn-over (like shedding dead skin) and will have you glowing in no time. If you are new to exfoliating, start 2-3x a week, and gradually increase. After exfolating, mist your face (optional) to reset your skin's PH.            </p>
            <p>"Exfoliator.imageLinks.img1"</p>
            <p>"Exfoliator.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" 4. Serum >">
            <p>
            Same as the AM routine, addresses concerns. Apply on damp skin as damp skin is more permeable!
            </p>
            <p>"Serum.imageLinks.img1"</p>
            <p>"Serum.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" 5. Moisturiser >">
            <p>
            Same as the AM routine, Alongside a night-time oil (optional) this helps lock in all the goodness and keep your skin hydrated. Apply to damp skin.
            </p>
            <p>"Moisturiser.imageLinks.img1"</p>
            <p>"Moisturiser.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
        </div>
        <div className="optionalWrapper">
          <h1>Optional Products</h1>
          <Collapsible trigger=" Oil >">
            <p>
              Oils act as occlusives, sealing everything in. Use them in your PM routine after your moisturiser for a face that feels and looks like silk.
            </p>
            <p>"Oil.imageLinks.img1"</p>
            <p>"Oil.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" Mist >">
            <p>
              Msit Mist Mist! Misting is a great step in both your AM and PM routine. Everything (apart from exfoliatiors and oils) is applied better to damp skin. Ideally you should: Cleanse, tone, exfoliate, mist, serum, mist, moisturiser, oil. You always want a hydrating mist (and toner / essence), not an exfoliating one.
            </p>
            <p>"Mist.imageLinks.img1"</p>
            <p>"Mist.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" Mask >">
            <p>
              Masking is nice for some me-time, some pamper-time, but they're not necessary. If you do choose to mask, use 2-3x a week after cleansing. After removal, follow with toner and the rest of your routine.
            </p>
            <p>"Mask.imageLinks.img1"</p>
            <p>"Mask.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
        </div>
      </div>
    </>
  );
};

export default ResultsScreen;

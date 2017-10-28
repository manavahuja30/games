package nexus._1;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * A representation of the literals of the enumeration '
 * <em><b>spielerStates</b></em>'. <!-- begin-user-doc --> <!-- end-user-doc -->
 * 
 * @generated
 */
public enum SpielerStates {

	/**
	 * The enum: CANMOVEFIGURE <!-- begin-user-doc --> <!-- end-user-doc -->
	 * 
	 * @generated
	 */
	CANMOVEFIGURE(0, "canMoveFigure", "canMoveFigure") {

		/**
		 * @return always true for this instance
		 * @generated
		 */
		@Override
		public boolean isCanMoveFigure() {
			return true;
		}
	},
	/**
	 * The enum: ASSIGNRESOURCES <!-- begin-user-doc --> <!-- end-user-doc -->
	 * 
	 * @generated
	 */
	ASSIGNRESOURCES(1, "assignResources", "assignResources") {

		/**
		 * @return always true for this instance
		 * @generated
		 */
		@Override
		public boolean isAssignResources() {
			return true;
		}
	},
	/**
	 * The enum: WAITINGFORNEXTTURN <!-- begin-user-doc --> <!-- end-user-doc
	 * -->
	 * 
	 * @generated
	 */
	WAITINGFORNEXTTURN(2, "waitingForNextTurn", "waitingForNextTurn") {

		/**
		 * @return always true for this instance
		 * @generated
		 */
		@Override
		public boolean isWaitingForNextTurn() {
			return true;
		}
	};

	/**
	 * An array of all the '<em><b>spielerStates</b></em>' enumerators. <!--
	 * begin-user-doc --> <!-- end-user-doc -->
	 * 
	 * @generated
	 */
	private static final SpielerStates[] VALUES_ARRAY = new SpielerStates[] {
			CANMOVEFIGURE, ASSIGNRESOURCES, WAITINGFORNEXTTURN };

	/**
	 * A public read-only list of all the '<em><b>spielerStates</b></em>'
	 * enumerators. <!-- begin-user-doc --> <!-- end-user-doc -->
	 * 
	 * @generated
	 */
	public static final List<SpielerStates> VALUES = Collections
			.unmodifiableList(Arrays.asList(VALUES_ARRAY));

	/**
	 * Returns the '<em><b>spielerStates</b></em>' literal with the specified
	 * literal value. <!-- begin-user-doc --> <!-- end-user-doc -->
	 * 
	 * @generated
	 */
	public static SpielerStates get(String literal) {
		for (int i = 0; i < VALUES_ARRAY.length; ++i) {
			SpielerStates result = VALUES_ARRAY[i];
			if (result.toString().equals(literal)) {
				return result;
			}
		}
		return null;
	}

	/**
	 * Returns the '<em><b>spielerStates</b></em>' literal with the specified
	 * name. <!-- begin-user-doc --> <!-- end-user-doc -->
	 * 
	 * @generated
	 */
	public static SpielerStates getByName(String name) {
		for (int i = 0; i < VALUES_ARRAY.length; ++i) {
			SpielerStates result = VALUES_ARRAY[i];
			if (result.getName().equals(name)) {
				return result;
			}
		}
		return null;
	}

	/**
	 * Returns the '<em><b>spielerStates</b></em>' literal with the specified
	 * integer value. <!-- begin-user-doc --> <!-- end-user-doc -->
	 * 
	 * @generated
	 */
	public static SpielerStates get(int value) {
		for (SpielerStates enumInstance : VALUES_ARRAY) {
			if (enumInstance.getValue() == value) {
				return enumInstance;
			}
		}
		return null;
	}

	/**
	 * <!-- begin-user-doc --> <!-- end-user-doc -->
	 * 
	 * @generated
	 */
	private final int value;

	/**
	 * <!-- begin-user-doc --> <!-- end-user-doc -->
	 * 
	 * @generated
	 */
	private final String name;

	/**
	 * <!-- begin-user-doc --> <!-- end-user-doc -->
	 * 
	 * @generated
	 */
	private final String literal;

	/**
	 * Only this class can construct instances. <!-- begin-user-doc --> <!--
	 * end-user-doc -->
	 * 
	 * @generated
	 */
	private SpielerStates(int value, String name, String literal) {
		this.value = value;
		this.name = name;
		this.literal = literal;
	}

	/**
	 * <!-- begin-user-doc --> <!-- end-user-doc -->
	 * 
	 * @return false, is overridden by actual enum types.
	 * @generated
	 */
	public boolean isCanMoveFigure() {
		return false;
	}

	/**
	 * <!-- begin-user-doc --> <!-- end-user-doc -->
	 * 
	 * @return false, is overridden by actual enum types.
	 * @generated
	 */
	public boolean isAssignResources() {
		return false;
	}

	/**
	 * <!-- begin-user-doc --> <!-- end-user-doc -->
	 * 
	 * @return false, is overridden by actual enum types.
	 * @generated
	 */
	public boolean isWaitingForNextTurn() {
		return false;
	}

	/**
	 * <!-- begin-user-doc --> <!-- end-user-doc -->
	 * 
	 * @generated
	 */
	public int getValue() {
		return value;
	}

	/**
	 * <!-- begin-user-doc --> <!-- end-user-doc -->
	 * 
	 * @generated
	 */
	public String getName() {
		return name;
	}

	/**
	 * <!-- begin-user-doc --> <!-- end-user-doc -->
	 * 
	 * @generated
	 */
	public String getLiteral() {
		return literal;
	}

	/**
	 * <!-- begin-user-doc --> <!-- end-user-doc -->
	 * 
	 * @return the literal value of the enumerator, which is its string
	 *         representation.
	 * @generated
	 */
	@Override
	public String toString() {
		return literal;
	}
}
